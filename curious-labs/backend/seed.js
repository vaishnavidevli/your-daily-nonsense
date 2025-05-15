const mongoose = require('mongoose');
const Grade = require('./models/Grade');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  seedData();
})
.catch(err => {
  console.log('Error connecting to MongoDB', err);
});

const seedData = [
  {
    grade: 6,
    subjectsV2: [
      {
        id: "phy",
        name: "Physics",
        chapters: [
          {
            id: "motion",
            name: "Motion and Measurement",
            topics: [
              {
                id: "topic1",
                title: "What is Motion?",
                description: "Motion refers to the change in position of an object over time, relative to its surroundings. If you're watching a car drive down the street, you can observe the motion as it changes position with respect to the houses and trees around it."
              },
              {
                id: "topic2",
                title: "Measurement Units",
                description: "Measurement units are standardized values used to express quantities. For example, meters (m) are used to measure distance, while seconds (s) measure time. If you ever wanted to measure how long it takes you to finish a video game, you'd use seconds!"
              }
            ],
            questions: [
              {
                id: "q1",
                question: "If you could jump from Earth to space, would you need a parachute or a giant trampoline?",
                description: "In reality, if you could somehow jump from Earth into space, you’d need a lot more than a trampoline. The lack of air resistance in space means there’s no way to slow you down, and the absence of gravity means you wouldn’t fall back. A parachute wouldn't work because there’s no air to create resistance!"
              },
              {
                id: "q2",
                question: "What if you ran faster than the speed of light, would you catch up with your own shadow or outrun it?",
                description: "Running faster than the speed of light is currently impossible, as it defies the laws of physics. If we could somehow move at such a speed, our shadow might be left behind. However, the concept of moving faster than light is still purely hypothetical and full of mind-bending paradoxes!"
              }
            ]
          },
          {
            id: "force",
            name: "Force and Laws of Motion",
            topics: [
              {
                id: "topic1",
                title: "What is Force?",
                description: "Force is a push or pull that causes objects to change their motion. For example, when you push a door to open it, you’re applying a force. The harder you push, the quicker the door moves."
              },
              {
                id: "topic2",
                title: "Newton's Laws of Motion",
                description: "Newton's Laws describe how objects behave when forces act on them. The first law says an object in motion stays in motion unless acted upon by an external force. The second law shows how force and acceleration are related. The third law says that for every action, there’s an equal and opposite reaction."
              }
            ],
            questions: [
              {
                id: "q1",
                question: "If a penguin pushes a car, does the car feel confused or just move?",
                description: "If a penguin were strong enough to push a car, the car would move according to the force applied. It wouldn’t feel confused, but the penguin’s small size might make the push less effective. Of course, penguins don’t normally push cars!"
              },
              {
                id: "q2",
                question: "If I throw a tennis ball into space, will it ever come back or just keep floating forever?",
                description: "If you threw a tennis ball into space, it would keep floating until something (like gravity from a planet or star) pulls it back. In the vacuum of space, there’s no air resistance to slow it down, so it could theoretically float forever unless interfered with by another object."
              }
            ]
          },
          {
            id: "energy",
            name: "Energy and Work",
            topics: [
              {
                id: "topic1",
                title: "What is Energy?",
                description: "Energy is the ability to do work. There are many forms of energy, including kinetic energy (motion), potential energy (stored energy), and thermal energy (heat). Energy is required to move an object or even to warm up your coffee!"
              },
              {
                id: "topic2",
                title: "Work Done by a Force",
                description: "Work happens when a force acts on an object and moves it over a distance. For example, when you push a box, the force you apply to the box is doing work, especially if the box moves!"
              }
            ],
            questions: [
              {
                id: "q1",
                question: "If I had an unlimited supply of energy, could I run forever without getting tired or would I eventually become bored?",
                description: "While unlimited energy might keep your muscles working forever, boredom is a mental state. So even with unlimited energy, you might eventually get bored and stop running if you have nothing interesting to do!"
              },
              {
                id: "q2",
                question: "If you push a rock on Mars, will the rock enjoy the ride or just stay put?",
                description: "If you push a rock on Mars, it would move, but it wouldn't 'enjoy' the ride. Rocks don’t have feelings, and Mars’ gravity is weaker than Earth's, so the rock would move more easily!"
              }
            ]
          },
          {
            id: "light",
            name: "Light and Optics",
            topics: [
              {
                id: "topic1",
                title: "What is Light?",
                description: "Light is a form of energy that allows us to see. It travels in waves and can be reflected, refracted, or absorbed by different objects. Without light, we wouldn’t be able to see anything at all!"
              },
              {
                id: "topic2",
                title: "Reflection and Refraction",
                description: "Reflection happens when light bounces off an object (like a mirror), and refraction occurs when light bends as it passes through materials like water or glass. This is why things appear bent or distorted when viewed underwater."
              }
            ],
            questions: [
              {
                id: "q1",
                question: "Can light ever get bored of traveling in straight lines and decide to take a detour through a mirror?",
                description: "Light doesn’t get bored, but when it hits a mirror, it reflects and changes direction. It doesn't have a choice, it follows the rules of physics!"
              },
              {
                id: "q2",
                question: "If I shine a flashlight into a black hole, would the light just disappear or try to fight its way out?",
                description: "Any light that gets too close to a black hole is pulled in and cannot escape. So, the flashlight’s beam would get absorbed, and you’d never see it again!"
              }
            ]
          }
        ]
      },
      {
        id: "chem",
        name: "Chemistry",
        chapters: [
          {
            id: "atoms",
            name: "Atoms and Molecules",
            topics: [
              {
                id: "topic1",
                title: "What is an Atom?",
                description: "An atom is the smallest unit of matter and consists of a nucleus (protons and neutrons) and electrons orbiting around it. Everything around us is made up of atoms—yes, even your favorite chocolate bar!"
              },
              {
                id: "topic2",
                title: "Atoms Bonding Together",
                description: "Atoms bond together to form molecules through various types of bonds—ionic, covalent, or metallic. When atoms bond, they form compounds, like water (H2O), which is made of hydrogen and oxygen atoms bonded together."
              }
            ],
            questions: [
              {
                id: "q1",
                question: "If atoms were tiny people, what would they wear? Would they need a tiny wardrobe?",
                description: "Atoms are far too small to wear clothes, but if they did, they might need tiny outfits based on their roles. For example, hydrogen atoms might need a simple one-piece suit, while oxygen atoms would wear something a bit more complex!"
              },
              {
                id: "q2",
                question: "If I made an atom jump in the air, would it come back down or just keep floating off into the universe?",
                description: "Atoms don’t jump, but they can move if they gain enough energy (like from heat). In space, atoms are likely to stay where they are unless something else, like gravity, affects them."
              }
            ]
          }
        ]
      }
    ]
  }
  // You can continue adding grades 7 and 8 with similar quirky questions and explanations
];

async function seedDB() {
  try {
    // Delete existing data to avoid duplicates
    await Grade.deleteMany({});
    console.log("Existing grades removed.");

    // Insert seed data
    await Grade.insertMany(seedData);
    console.log("Seed data inserted.");
  } catch (err) {
    console.error("Seeding error:", err);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
}

seedDB();


