const { MongoClient } = require('mongodb');

// Sample data
const places = [
  {
      "name": "NEIL ISLAND",
      "description": "Neil Island is one of India’s Andaman Islands, in the Bay of Bengal. Bharatpur Beach has coral reefs teeming with tropical fish. Laxmanpur Beach is known for its sunset views. Howrah Bridge is a natural rock formation accessible at low tide. Near the island’s wharf is Neil Kendra village, with a curving, sandy bay dotted with boats. Off the southeast coast, the tiny Sir Hugh Rose Island is a sanctuary for turtles.",
      "image": "https://uploads-ssl.webflow.com/5b56319971ac8c7475a9d877/5c4f5622a29a8f65c7f25f3e_IMG_7728%20Neil%20Island%20(21).jpg",
      "location": "https://www.google.co.in/maps/place/Neill+Island,+Andaman+and+Nicobar+Islands+744104/data=!4m2!3m1!1s0x3088d9a13824c715:0xddd01ec98b4eb529?sa=X&ved=2ahUKEwjTjPqquvPlAhU56nMBHbmRBCAQ8gEwJXoECBAQBA"
  },
  {
      "name": "CELLULAR JAIL,PORT BLAIR",
      "description": "It has been an important historical part of Port Blair. Notable freedom fighters such as Veer Savarkar, Yogendra Shukla, Batukeshwar Dutt, and Babarao Savarkar were some of the inmates here. Don’t miss the light and sound show(Monday, Wednesday and Friday) when you visit Cellular jail.",
      "image": "https://www.holidify.com/images/cmsuploads/compressed/3616_20190213160612jpg",
      "location": "https://www.google.co.in/maps/place/Cellular+Jail+National+Monument/@11.6738247,92.7479768,15z/data=!4m2!3m1!1s0x0:0x616a8c6623fdba3f?sa=X&ved=2ahUKEwihqtPEuvPlAhU4IbcAHThdBsAQ_BIwJnoECA4QCA"
  },
  {
      "name": "CORBYN'S COVE,PORT BLAIR",
      "description": "Surrounded by lush green palms, this happens to be one of the busier beaches in the Andamans. It’s located right outside of Port Blair about 8 km. The drive there itself is a scenic treat to the eyes.",
      "image": "https://live.staticflickr.com/982/40047849690_7a78e1f816_b.jpg",
      "location": "https://www.google.co.in/maps/place/Corbyn+Cove+Beach/@11.6449942,92.7458387,17z/data=!3m1!4b1!4m5!3m4!1s0x308894fccfdb049d:0x60d5e3776ddced65!8m2!3d11.6449942!4d92.7480274"
  },
  {
      "name": "SAMUDRIKA NAVAL MARINE MUSEUM,PORT BLAIR",
      "description": "This museum is a perfect blend of historical and modern Andaman. A massive blue whale, in its skeletal form, of course, greets you as you enter the museum. There is also an aquarium with fish of all shapes and sizes, from a parrotfish to the rare and venomous species of stonefish and corals.",
      "image": "https://andamantripadvisor.in/files/social/social_b18e537c1984e883f43807737a639be4.jpg",
      "location": "https://www.google.co.in/maps/place/Samudrika+Marine+Museum/@11.6718057,92.7263692,15z/data=!4m2!3m1!1s0x0:0xd7352994a1c32fb8?sa=X&ved=2ahUKEwi64_yEu_PlAhWMILcAHYtnBf0Q_BIwC3oECBAQCA"
  },
  {
      "name": "HAVELOCK ISLAND(SWARAJ DWEEP)",
      "description": "Havelock Island is part of Ritchie’s Archipelago, in India’s Andaman Islands. It’s known for its dive sites and beaches, like Elephant Beach, with its coral reefs. Crescent-shaped Radhanagar Beach is a popular spot for watching the sunset. On the island’s east side, rocky sections mark long, tree-lined Vijaynagar Beach.",
      "image": "https://www.tripsavvy.com/thmb/SF7NoKaUPvXKxBkDbmPrC-GSddU=/2121x1414/filters:fill(auto,1)/GettyImages-508601155-592e840f5f9b5859500d0724.jpg",
      "location": "https://www.google.co.in/maps/place/Swaraj+Dweep/@11.9656084,92.9194242,12z/data=!3m1!4b1!4m5!3m4!1s0x3088d3d85e0fe039:0x25c8aaaa513ef4bf!8m2!3d11.9760503!4d92.9875565"
  }
];
    

// MongoDB URL
const mongoUrl = process.env.DB_URL;

// Database and collection names
const dbName = 'travel-app-data';
const collectionName = 'places';

// Function to insert data
async function insertData() {
  const client = new MongoClient(mongoUrl);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    // Insert data into the collection
    const result = await collection.insertMany(places);
    console.log(`${result.insertedCount} documents inserted`);

  } catch (error) {
    console.error('Error connecting to MongoDB or inserting data:', error);
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
}

// Call the function to insert data
insertData();
