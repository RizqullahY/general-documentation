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

  useEffect(() => {
    if (!isSearchVisible) return;

    const styles = document.createElement("style");
    styles.textContent = `
      .ais-InstantSearch {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
        background-color: white;
        border-radius: 8px;
      }
      .ais-SearchBox-input {
        width: 100%;
        padding: 12px 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
        outline: none;
      }
      .ais-Hits-item {
        padding: 1rem;
        display: flex;
        gap: 1rem;
        align-items: center;
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
    `;
    document.head.appendChild(styles);

    const searchClient = algoliasearch(
      "YXSE9QCU6F", 
      "6572b47d88bbcb5099738f7249e68810" 
    );

    const search = instantsearch({
      indexName: "movies_index",
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
        placeholder: "Search your data here",
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

    return () => {
      document.head.removeChild(styles);
    };
  }, [isSearchVisible]);

  const toggleSearchVisibility = () => {
    setSearchVisible((prev) => !prev);
  };

  return (
    <div>
      <button 
        onClick={toggleSearchVisibility} 
        className="p-2 rounded bg-primary text-white"
      >
        {isSearchVisible ? "Close Search" : "Open Search"}
      </button>

      {isSearchVisible && (
        <div className="ais-InstantSearch">
          <div id="searchbox" />
          <div id="hits" className="hide-content" />
          <div id="algolia-footer" className="hide-content" />
        </div>
      )}
    </div>
  );
};
