'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Authors', [
      {
        name: 'Chinua Achebe',
        country: 'Nigeria',
        birthday: new Date(1532173096249).toISOString().split('T')[0],
      },
      {
        name: 'Hans Christian Andersen',
        country: 'Denmark',
        birthday: new Date(1372890224247).toISOString().split('T')[0],
      },
      {
        name: 'Dante Alighieri',
        country: 'Italy',
        birthday: new Date(1488875337372).toISOString().split('T')[0],
      },
      {
        name: 'Unknown',
        country: null,
        birthday: null,
      },
      {
        name: 'Jane Austen',
        country: 'United Kingdom',
        birthday: new Date(1390768954176).toISOString().split('T')[0],
      },
      {
        name: 'Honoré de Balzac',
        country: 'France',
        birthday: new Date(1421123600270).toISOString().split('T')[0],
      },
      {
        name: 'Samuel Beckett',
        country: 'Republic of Ireland',
        birthday: new Date(1548866060469).toISOString().split('T')[0],
      },
      {
        name: 'Giovanni Boccaccio',
        country: 'Italy',
        birthday: new Date(1546559409518).toISOString().split('T')[0],
      },
      {
        name: 'Jorge Luis Borges',
        country: 'Argentina',
        birthday: new Date(1431476072154).toISOString().split('T')[0],
      },
      {
        name: 'Emily Brontë',
        country: 'United Kingdom',
        birthday: new Date(1612631991158).toISOString().split('T')[0],
      },
      {
        name: 'Albert Camus',
        country: 'Algeria, French Empire',
        birthday: new Date(1659222238092).toISOString().split('T')[0],
      },
      {
        name: 'Paul Celan',
        country: 'Romania, France',
        birthday: new Date(1559735081382).toISOString().split('T')[0],
      },
      {
        name: 'Louis-Ferdinand Céline',
        country: 'France',
        birthday: new Date(1662477607589).toISOString().split('T')[0],
      },
      {
        name: 'Miguel de Cervantes',
        country: 'Spain',
        birthday: new Date(1365773962782).toISOString().split('T')[0],
      },
      {
        name: 'Geoffrey Chaucer',
        country: 'England',
        birthday: new Date(1418536783634).toISOString().split('T')[0],
      },
      {
        name: 'Anton Chekhov',
        country: 'Russia',
        birthday: new Date(1354958875865).toISOString().split('T')[0],
      },
      {
        name: 'Joseph Conrad',
        country: 'United Kingdom',
        birthday: new Date(1487041486132).toISOString().split('T')[0],
      },
      {
        name: 'Charles Dickens',
        country: 'United Kingdom',
        birthday: new Date(1331580252833).toISOString().split('T')[0],
      },
      {
        name: 'Denis Diderot',
        country: 'France',
        birthday: new Date(1515936867874).toISOString().split('T')[0],
      },
      {
        name: 'Alfred Döblin',
        country: 'Germany',
        birthday: new Date(1578312548250).toISOString().split('T')[0],
      },
      {
        name: 'Fyodor Dostoevsky',
        country: 'Russia',
        birthday: new Date(1517454507972).toISOString().split('T')[0],
      },
      {
        name: 'Fyodor Dostoevsky',
        country: 'Russia',
        birthday: new Date(1592185930234).toISOString().split('T')[0],
      },
      {
        name: 'Fyodor Dostoevsky',
        country: 'Russia',
        birthday: new Date(1399398096027).toISOString().split('T')[0],
      },
      {
        name: 'Fyodor Dostoevsky',
        country: 'Russia',
        birthday: new Date(1553434090973).toISOString().split('T')[0],
      },
      {
        name: 'George Eliot',
        country: 'United Kingdom',
        birthday: new Date(1375179404781).toISOString().split('T')[0],
      },
      {
        name: 'Ralph Ellison',
        country: 'United States',
        birthday: new Date(1629055206389).toISOString().split('T')[0],
      },
      {
        name: 'Euripides',
        country: 'Greece',
        birthday: new Date(1550790646196).toISOString().split('T')[0],
      },
      {
        name: 'William Faulkner',
        country: 'United States',
        birthday: new Date(1379893605705).toISOString().split('T')[0],
      },
      {
        name: 'William Faulkner',
        country: 'United States',
        birthday: new Date(1391961857826).toISOString().split('T')[0],
      },
      {
        name: 'Gustave Flaubert',
        country: 'France',
        birthday: new Date(1639879789749).toISOString().split('T')[0],
      },
      {
        name: 'Gustave Flaubert',
        country: 'France',
        birthday: new Date(1616076616423).toISOString().split('T')[0],
      },
      {
        name: 'Federico García Lorca',
        country: 'Spain',
        birthday: new Date(1686394533035).toISOString().split('T')[0],
      },
      {
        name: 'Gabriel García Márquez',
        country: 'Colombia',
        birthday: new Date(1402631478722).toISOString().split('T')[0],
      },
      {
        name: 'Gabriel García Márquez',
        country: 'Colombia',
        birthday: new Date(1515483047500).toISOString().split('T')[0],
      },
      {
        name: 'Johann Wolfgang von Goethe',
        country: 'Saxe-Weimar',
        birthday: new Date(1428147868598).toISOString().split('T')[0],
      },
      {
        name: 'Nikolai Gogol',
        country: 'Russia',
        birthday: new Date(1327481415764).toISOString().split('T')[0],
      },
      {
        name: 'Günter Grass',
        country: 'Germany',
        birthday: new Date(1624173899299).toISOString().split('T')[0],
      },
      {
        name: 'João Guimarães Rosa',
        country: 'Brazil',
        birthday: new Date(1495931241597).toISOString().split('T')[0],
      },
      {
        name: 'Knut Hamsun',
        country: 'Norway',
        birthday: new Date(1346219447211).toISOString().split('T')[0],
      },
      {
        name: 'Ernest Hemingway',
        country: 'United States',
        birthday: new Date(1430694742413).toISOString().split('T')[0],
      },
      {
        name: 'Homer',
        country: 'Greece',
        birthday: new Date(1635612726442).toISOString().split('T')[0],
      },
      {
        name: 'Homer',
        country: 'Greece',
        birthday: new Date(1336034565488).toISOString().split('T')[0],
      },
      {
        name: 'Henrik Ibsen',
        country: 'Norway',
        birthday: new Date(1439031701793).toISOString().split('T')[0],
      },
      {
        name: 'James Joyce',
        country: 'Irish Free State',
        birthday: new Date(1444238650367).toISOString().split('T')[0],
      },
      {
        name: 'Franz Kafka',
        country: 'Czechoslovakia',
        birthday: new Date(1677414451383).toISOString().split('T')[0],
      },
      {
        name: 'Franz Kafka',
        country: 'Czechoslovakia',
        birthday: new Date(1399050052665).toISOString().split('T')[0],
      },
      {
        name: 'Franz Kafka',
        country: 'Czechoslovakia',
        birthday: new Date(1423991631889).toISOString().split('T')[0],
      },
      {
        name: 'Kālidāsa',
        country: 'India',
        birthday: new Date(1370590490663).toISOString().split('T')[0],
      },
      {
        name: 'Yasunari Kawabata',
        country: 'Japan',
        birthday: new Date(1543111361062).toISOString().split('T')[0],
      },
      {
        name: 'Nikos Kazantzakis',
        country: 'Greece',
        birthday: new Date(1515801523845).toISOString().split('T')[0],
      },
      {
        name: 'D. H. Lawrence',
        country: 'United Kingdom',
        birthday: new Date(1460769201179).toISOString().split('T')[0],
      },
      {
        name: 'Halldór Laxness',
        country: 'Iceland',
        birthday: new Date(1535362138501).toISOString().split('T')[0],
      },
      {
        name: 'Giacomo Leopardi',
        country: 'Italy',
        birthday: new Date(1646602851477).toISOString().split('T')[0],
      },
      {
        name: 'Doris Lessing',
        country: 'United Kingdom',
        birthday: new Date(1628763420443).toISOString().split('T')[0],
      },
      {
        name: 'Astrid Lindgren',
        country: 'Sweden',
        birthday: new Date(1560039330433).toISOString().split('T')[0],
      },
      {
        name: 'Lu Xun',
        country: 'China',
        birthday: new Date(1550189689467).toISOString().split('T')[0],
      },
      {
        name: 'Naguib Mahfouz',
        country: 'Egypt',
        birthday: new Date(1328023086915).toISOString().split('T')[0],
      },
      {
        name: 'Thomas Mann',
        country: 'Germany',
        birthday: new Date(1687904033917).toISOString().split('T')[0],
      },
      {
        name: 'Thomas Mann',
        country: 'Germany',
        birthday: new Date(1464396147388).toISOString().split('T')[0],
      },
      {
        name: 'Herman Melville',
        country: 'United States',
        birthday: new Date(1360027580479).toISOString().split('T')[0],
      },
      {
        name: 'Michel de Montaigne',
        country: 'France',
        birthday: new Date(1625709858643).toISOString().split('T')[0],
      },
      {
        name: 'Elsa Morante',
        country: 'Italy',
        birthday: new Date(1500193897507).toISOString().split('T')[0],
      },
      {
        name: 'Toni Morrison',
        country: 'United States',
        birthday: new Date(1509769999581).toISOString().split('T')[0],
      },
      {
        name: 'Murasaki Shikibu',
        country: 'Japan',
        birthday: new Date(1475176978635).toISOString().split('T')[0],
      },
      {
        name: 'Robert Musil',
        country: 'Austria',
        birthday: new Date(1365022067336).toISOString().split('T')[0],
      },
      {
        name: 'Vladimir Nabokov',
        country: 'Russia/United States',
        birthday: new Date(1469381199293).toISOString().split('T')[0],
      },
      {
        name: 'George Orwell',
        country: 'United Kingdom',
        birthday: new Date(1443350641287)
          .toISOString()
          .substring(0, 10)
          .split('T')[0],
      },
      {
        name: 'Ovid',
        country: 'Roman Empire',
        birthday: new Date(1445154373715).toISOString().split('T')[0],
      },
      {
        name: 'Fernando Pessoa',
        country: 'Portugal',
        birthday: new Date(1596742997030).toISOString().split('T')[0],
      },
      {
        name: 'Edgar Allan Poe',
        country: 'United States',
        birthday: new Date(1347420191193).toISOString().split('T')[0],
      },
      {
        name: 'Marcel Proust',
        country: 'France',
        birthday: new Date(1581613554795).toISOString().split('T')[0],
      },
      {
        name: 'François Fabelais',
        country: 'France',
        birthday: new Date(1582276966704).toISOString().split('T')[0],
      },
      {
        name: 'Juan Rulfo',
        country: 'Mexico',
        birthday: new Date(1388570826821).toISOString().split('T')[0],
      },
      {
        name: 'Rumi',
        country: 'Sultanate of Rum',
        birthday: new Date(1427411188075).toISOString().split('T')[0],
      },
      {
        name: 'Salman Rushdie',
        country: 'United Kingdom, India',
        birthday: new Date(1587998882842).toISOString().split('T')[0],
      },
      {
        name: 'Saadi',
        country: 'Persia, Persian Empire',
        birthday: new Date(1439012661581).toISOString().split('T')[0],
      },
      {
        name: 'Tayeb Salih',
        country: 'Sudan',
        birthday: new Date(1340967142543).toISOString().split('T')[0],
      },
      {
        name: 'José Saramago',
        country: 'Portugal',
        birthday: new Date(1547449414037).toISOString().split('T')[0],
      },
      {
        name: 'William Shakespeare',
        country: 'England',
        birthday: new Date(1552429516668).toISOString().split('T')[0],
      },
      {
        name: 'William Shakespeare',
        country: 'England',
        birthday: new Date(1336154115596).toISOString().split('T')[0],
      },
      {
        name: 'William Shakespeare',
        country: 'England',
        birthday: new Date(1342949884863).toISOString().split('T')[0],
      },
      {
        name: 'Sophocles',
        country: 'Greece',
        birthday: new Date(1647516366563).toISOString().split('T')[0],
      },
      {
        name: 'Stendhal',
        country: 'France',
        birthday: new Date(1404130511166).toISOString().split('T')[0],
      },
      {
        name: 'Laurence Sterne',
        country: 'England',
        birthday: new Date(1587812093608).toISOString().split('T')[0],
      },
      {
        name: 'Italo Svevo',
        country: 'Italy',
        birthday: new Date(1368990015863).toISOString().split('T')[0],
      },
      {
        name: 'Jonathan Swift',
        country: 'Ireland',
        birthday: new Date(1409554206389).toISOString().split('T')[0],
      },
      {
        name: 'Leo Tolstoy',
        country: 'Russia',
        birthday: new Date(1485806420703).toISOString().split('T')[0],
      },
      {
        name: 'Leo Tolstoy',
        country: 'Russia',
        birthday: new Date(1377973234356).toISOString().split('T')[0],
      },
      {
        name: 'Leo Tolstoy',
        country: 'Russia',
        birthday: new Date(1344405793485).toISOString().split('T')[0],
      },
      {
        name: 'Mark Twain',
        country: 'United States',
        birthday: new Date(1447931829505).toISOString().split('T')[0],
      },
      {
        name: 'Valmiki',
        country: 'India',
        birthday: new Date(1355601228421).toISOString().split('T')[0],
      },
      {
        name: 'Virgil',
        country: 'Roman Empire',
        birthday: new Date(1357643142332).toISOString().split('T')[0],
      },
      {
        name: 'Vyasa',
        country: 'India',
        birthday: new Date(1494793453973).toISOString().split('T')[0],
      },
      {
        name: 'Walt Whitman',
        country: 'United States',
        birthday: new Date(1329315704147).toISOString().split('T')[0],
      },
      {
        name: 'Virginia Woolf',
        country: 'United Kingdom',
        birthday: new Date(1437726013036).toISOString().split('T')[0],
      },
      {
        name: 'Virginia Woolf',
        country: 'United Kingdom',
        birthday: new Date(1620032838839).toISOString().split('T')[0],
      },
      {
        name: 'Marguerite Yourcenar',
        country: 'France/Belgium',
        birthday: new Date(1577915988195).toISOString().split('T')[0],
      },
    ])
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Author', null, {})
  },
}
