"use client";

import { useState, useEffect } from "react";
import { liteClient as algoliasearch } from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import {
  searchBox,
  hits,
  configure,
  poweredBy,
} from "instantsearch.js/es/widgets";
import "instantsearch.css/themes/reset.css";

export const SearchBar: React.FC = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isSearchVisible) return;

    const styles = document.createElement("style");
    styles.textContent = `
      .ais-InstantSearch {
        width: 100%;
        max-width: 800px;
        margin: 1rem auto;
        padding: 1rem;
        background-color: white;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        transition: transform 0.3s ease, opacity 0.3s ease;
        transform: scale(1.05);
        opacity: 1;
      }
      .ais-InstantSearch.dark-mode {
        background-color: #1e293b;
        color: #f1f5f9;
        box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.1);
      }
      .ais-SearchBox-input {
        width: 100%;
        padding: 12px 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
        outline: none;
        transition: border-color 0.3s;
      }
      .ais-SearchBox-input:focus {
        border-color: #2563eb;
      }
      .ais-Hits-item {
        padding: 1rem;
        display: flex;
        gap: 1rem;
        align-items: center;
        transition: background-color 0.3s ease;
      }
      .ais-Hits-item:hover {
        background-color: #f3f4f6;
      }
      .ais-Hits-item img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 4px;
      }
      .hide-content {
        display: none;
      }
      .loading-spinner {
        margin: 0 auto;
        width: 50px;
        height: 50px;
        border: 4px solid #ddd;
        border-top: 4px solid #2563eb;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `;
    document.head.appendChild(styles);

    const searchClient = algoliasearch(
      "YXSE9QCU6F", // Replace with your Application ID
      "6572b47d88bbcb5099738f7249e68810" // Replace with your API Key
    );

    const search = instantsearch({
      indexName: "movies_index", // Replace with your index name
      searchClient,
      onStateChange({ uiState }) {
        const hitsContainer = document.querySelector("#hits");
        const footerContainer = document.querySelector("#algolia-footer");

        if (!uiState?.query) {
          hitsContainer?.classList.add("hide-content");
          footerContainer?.classList.add("hide-content");
        } else {
          hitsContainer?.classList.remove("hide-content");
          footerContainer?.classList.remove("hide-content");
        }
      },
    });

    search.addWidgets([
      searchBox({
        container: "#searchbox",
        placeholder: "Search your data here...",
      }),
      configure({
        hitsPerPage: 5,
      }),
      poweredBy({
        container: "#algolia-footer",
      }),
      hits({
        container: "#hits",
        templates: {
          item: (hit, { html, components }) => html`
            <div>
              <img src="${hit.backdrop_path}" alt="${hit.original_title}" />
              <div>
                <p><strong>${components.Highlight({ hit, attribute: "original_title" })}</strong></p>
                <p>${components.Highlight({ hit, attribute: "overview" })}</p>
              </div>
            </div>
          `,
        },
      }),
    ]);

    search.start();
    setIsLoading(false);

    return () => {
      document.head.removeChild(styles);
    };
  }, [isSearchVisible]);

  const toggleSearchVisibility = () => {
    setSearchVisible((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleSearchVisibility}
        className="p-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        {isSearchVisible ? "Close Search" : "Open Search"}
      </button>

      {isSearchVisible && (
        <div
          className={`ais-InstantSearch ${
            isSearchVisible && "dark-mode"
          } transition-all`}
        >
          {isLoading ? (
            <div className="loading-spinner"></div>
          ) : (
            <>
              <div id="searchbox" />
              <div id="hits" className="hide-content" />
              <div id="algolia-footer" className="hide-content" />
            </>
          )}
        </div>
      )}
    </div>
  );
};
