# general-documentation

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/RizqullahY/general-documentation)

1. Web Exploitation
Soal:
Sebuah website memiliki form login. Ketika Anda memasukkan username admin dan password sembarang, pesan "Access Denied" muncul. Namun, jika Anda mengubah header HTTP X-Admin menjadi true, Anda mendapatkan akses.
Flag format: CTF{flag}
Hint: Coba gunakan alat seperti Burp Suite atau Postman untuk memanipulasi header HTTP.

2. Cryptography
Soal:
Teks berikut telah dienkripsi menggunakan Caesar Cipher dengan shift 13 (ROT13). Temukan flag-nya.
Teks terenkripsi: PBG{cvpbpg_xrl_pnrfne}
Hint: ROT13 adalah substitusi alfabet, Anda bisa mencoba dekripsi manual atau menggunakan skrip Python sederhana.

3. Reverse Engineering
Soal:
Program berikut meminta Anda memasukkan password. Saat dijalankan, program memberikan flag jika password benar.
File: reverse_me
Cobalah menganalisis program menggunakan debugger seperti Ghidra atau IDA.
Hint: Periksa string yang ada di dalam program.

4. Forensics
Soal:
Anda diberikan file gambar bernama suspicious_image.jpg. Anda curiga ada sesuatu yang disembunyikan di dalam file ini.
Hint: Cobalah menggunakan alat seperti binwalk, exiftool, atau analisis hex file untuk menemukan sesuatu yang mencurigakan.

5. General Skills
Soal:
Ada file di server yang memiliki flag, tetapi nama file-nya tersembunyi. Gunakan perintah Linux untuk mencarinya.
Server: SSH ke ctf.example.com dengan username ctf dan password password123.
Hint: Gunakan perintah seperti find atau grep.

6. Binary Exploitation
Soal:
Sebuah program menerima input buffer sebesar 32 byte. Jika Anda bisa memasukkan lebih dari 32 byte, Anda dapat memanipulasi eksekusi program.
File: buffer_overflow
Hint: Perhatikan penggunaan fungsi yang rentan seperti gets().

7. OSINT (Open Source Intelligence)
Soal:
Seseorang telah memposting sebuah gambar di Twitter dengan menyebutkan bahwa koordinat GPS-nya tersembunyi dalam metadata gambar. Temukan koordinat tersebut.
Hint: Cari gambar tersebut di Twitter dan analisis metadata-nya menggunakan alat seperti exiftool.

8. Steganography (Stegano)
Soal:
Diberikan sebuah file audio hidden_message.wav. Ada pesan tersembunyi di dalamnya.
Hint: Coba gunakan alat seperti Sonic Visualizer atau analisis dengan teknik LSB untuk menemukan pesan tersembunyi.

9. Programming
Soal:
Tuliskan sebuah program dalam Python yang mencetak flag jika bilangan input adalah bilangan prima.
Input: Angka bulat n
Flag format: CTF{n_adalah_prima}
Hint: Periksa algoritma sederhana untuk menentukan bilangan prima.