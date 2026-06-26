import https from 'https';

const urls = [
  "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1516826957135-700ede19c6ce?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1434389678248-cb53434190c1?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1558769132-cb1fac08b4af?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1618932260643-fcce9d67566a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1519238263530-99abad67b86e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1584865288642-42078afe6942?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800"
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(`${url} - ${res.statusCode}`);
  }).on('error', (e) => {
    console.error(e);
  });
});
