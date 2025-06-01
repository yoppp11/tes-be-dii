# Deskripsi
Program ini menggunakan Sequelize ORM untuk mengelola database. Dokumentasi ini memberikan petunjuk untuk menjalankan program tes dengan setup database yang bersih.
# Prasyarat
Pastikan Anda telah menginstal dependensi berikut:

Node.js (versi 14 atau lebih baru)
NPM atau Yarn
Sequelize CLI
Database yang telah dikonfigurasi (PostgreSQL, MySQL, SQLite, dll.)

# Instalasi
bashnpm install
# atau
yarn install

# Konfigurasi Database
Pastikan file konfigurasi database (config/config.json atau config/database.js) telah diatur dengan benar sesuai dengan environment Anda.
Cara Menjalankan Program Tes
Perintah Lengkap
Jalankan perintah berikut untuk mempersiapkan database dan menjalankan tes:
bashnpx sequelize db:migrate:undo:all && npx sequelize db:migrate && npx sequelize db:seed:all
Penjelasan Perintah