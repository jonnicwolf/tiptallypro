const bcrypt = require('bcrypt');
const mysql = require('mysql');

// const conenction = mysql.createConnection({
//   host: 'localhost',
//   user: 'username',
//   password: 'password',
//   database: 'mydb'
// });

// const user = {
//   username: 'admin',
//   password: '0001',
//   created_at: new Date()
// };

// const password = '0001';
const saltRounds = 10;

// bcrypt.genSalt(
//   saltRounds,
//   (err,salt) => {
//     bcrypt.hash(
//       password,
//       salt,
//       (err, hash) => {
//         console.log(`Salt: ${salt}`)
//         console.log(`Hashed password: ${hash}`);
//         conenction.query(
//           'INSERT INTO users SET ?',
//           user,
//           (error, results, fields) => {
//             if (error){
//               console.error(error);
//             }
//             else {
//               console.log('New user inserted with ID: ${results.insertId}');
//             }
//           }
//         );
//       }
//     );
//   }
// );

bcrypt.hash()