// English Teacher Library — game catalogue. Add new games to this list.
const materials = [
 
{
  title: "The Secret City",
  category: "Grammar",
  level: "A1–A2",
  description: "Explore 10 neon shops, practise comparatives and superlatives, solve 20 grammar challenges and unlock the Secret Tower!",
  link: "the-secret-city.html"
},

  {
    title: "HEY, ARE YOU OK?",
    category: "speaking",
    level: "A1–A2",
    type: "Speaking Game",
    description: "Practise feelings, emotions and supportive conversations through interactive speaking challenges.",
    link: "HEY%2C%20ARE%20YOU%20OK.html"
  },
  {
    title: "MY WEEK, MY PLANS!",
    category: "grammar",
    level: "A2–B1",
    type: "Interactive Activity",
    description: "Plan your week, organise activities and practise talking about schedules and future plans.",
    link: "MY%20WEEK%2C%20MY%20PLANS!%20.html"
  },
  {
    title: "Minecraft: Unlock the Secret Treasure!",
    category: "grammar",
    level: "Pre-A1–A1",
    type: "Interactive Game",
    description: "Complete 20 Present Simple challenges, collect keys and unlock the secret treasure.",
    link: "minecraft-treasure%20.html"
  },

  {
    title: "Build My World",
    category: "grammar",
    level: "Pre-A1–A1",
    type: "Interactive Game",
    description: "Present Simple: affirmative and negative sentences. Answer questions and build your own world.",
    link: "build-my-world.html"
  },
  {
    title: "Crime Scene: The Case File",
    category: "vocabulary",
    level: "A2–B1",
    type: "Interactive Game",
    description: "Wider World 3 | Crime Vocabulary. Investigate crimes, collect clues and practise crime-related words.",
    link: "Crime%20Scene_%20The%20Case%20File.html"
  },
  {
    title: "Real Life, Real Connections",
    category: "vocabulary",
    level: "B1",
    type: "Interactive Activity",
    description: "Wider World 3 | Unit 7: People Power. Practise phrasal verbs, everyday expressions and real-life communication.",
    link: "real-life-real-connections%20.html"
  },
  {
    title: "Shopping Mission",
    category: "vocabulary",
    level: "A1–A2",
    type: "Interactive Game",
    description: "Wider World 2 | Unit 7: Shops & Containers. Visit different shops, complete shopping tasks and practise containers.",
    link: "shopping-mission.html"
  },

  { title: "The Future Glitch 2.0", category: "grammar", level: "A1–A2", type: "Interactive Game", description: "Practise future forms in an interactive adventure.", link: "future-glitch-2.html" },
  { title: "Present Simple Adventure", category: "grammar", level: "Pre-A1–A1", type: "Interactive Game", description: "Practise Present Simple with fun interactive challenges.", link: "presentsimpleadventure.html" },
  { title: "Lucky Block Adventure", category: "grammar", level: "Pre-A1–A1", type: "Interactive Game", description: "Break 20 lucky blocks and practise Present Simple affirmative, negative and question forms.", link: "Present%20Simple%20-%20Lucky%20block%20.html" },
  { title: "My Lunch Box", category: "vocabulary", level: "Pre-A1–A1", type: "Interactive Game", description: "Practise food vocabulary and build your own lunch box.", link: "My%20Lunch%20Box%20(1)%20(1).html" },
  { title: "Magic Bedroom with Prepositions", category: "grammar", level: "A1", type: "Interactive Game", description: "Create a bedroom and practise prepositions of place.", link: "Magic%20Bedroom%20with%20prepositions%20html.html" },
  { title: "Magic Bedroom", category: "vocabulary", level: "Pre-A1–A1", type: "Interactive Activity", description: "Design your bedroom and practise furniture vocabulary and writing.", link: "Magic%20Bedroom%20%E2%9C%A8.html" },
  { title: "Daily Calendar", category: "vocabulary", level: "Pre-A1–A1", type: "Interactive Game", description: "Practise days, months, dates, weather, seasons and feelings. Create your own daily calendar and build simple English sentences!", link: "Daily%20Calendar.html" },

  {
    title: "Alias",
    category: "speaking",
    level: "A2",
    type: "Speaking Game",
    description: "Describe words in English, guess the answers and practise speaking in a fun team challenge.",
    link: "alien-describe-it.html"
  },
  {
    title: "Reading Chess Battle",
    category: "reading",
    level: "Pre-A1",
    type: "Reading Game",
    description: "Practise basic English reading through a fun chess-themed challenge.",
    link: "reading-chess-battle.html"
  },
  {
    title: "Reading Checkers Battle",
    category: "reading",
    level: "Pre-A1",
    type: "Reading Game",
    description: "Read simple English sentences and complete a fun checkers-themed challenge.",
    link: "reading-checkers-battle%20.html"
  },
  {
    title: "The Floor Is Lava",
    category: "grammar",
    level: "Pre-A1–A1",
    type: "Interactive Game",
    description: "Practise Present Simple affirmative, negative and question forms in an exciting lava challenge.",
    link: "the-floor-is-lava%20.html"
  },
];

function renderMaterials() {
  const list = document.querySelector('[data-materials-category]');
  if (!list) return;
  const category = list.dataset.materialsCategory;
  const items = materials.filter(item => item.category.toLowerCase() === category)
    .sort((a,b) => a.title.localeCompare(b.title, 'en', {sensitivity:'base'}));
  const count = document.getElementById('game-count');
  if (count) count.textContent = `${items.length} ${items.length === 1 ? 'activity' : 'activities'}`;
  list.replaceChildren();
  if (!items.length) { const p=document.createElement('p'); p.textContent='No activities yet.'; list.append(p); return; }
  for (const item of items) {
    const card = document.createElement('article'); card.className = 'material-card';
    const meta = document.createElement('div'); meta.className = 'material-meta';
    for (const value of [item.level, item.type]) { const tag=document.createElement('span'); tag.className='material-tag'; tag.textContent=value; meta.append(tag); }
    const title = document.createElement('h2'); title.textContent=item.title;
    const description=document.createElement('p'); description.textContent=item.description;
    const actions=document.createElement('div'); actions.className='card-actions';
    const play=document.createElement('a'); play.className='open-button'; play.href=item.link; play.target='_blank'; play.rel='noopener noreferrer'; play.textContent='Play ↗'; play.setAttribute('aria-label', `Play ${item.title} in a new tab`);
    const copy=document.createElement('button'); copy.type='button'; copy.className='copy-button'; copy.textContent='Copy Link'; copy.setAttribute('aria-label', `Copy link for ${item.title}`);
    copy.addEventListener('click', async () => {
      const url = new URL(item.link, document.baseURI).href;
      try {
        if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(url);
        else {
          const input=document.createElement('textarea'); input.value=url; input.style.position='fixed'; input.style.opacity='0'; document.body.append(input); input.select();
          const ok=document.execCommand('copy'); input.remove(); if(!ok) throw new Error('Copy failed');
        }
        copy.textContent='Copied ✓'; setTimeout(()=>{copy.textContent='Copy Link'},2000);
      } catch(e) { window.prompt('Copy this game link:',url); }
    });
    actions.append(play,copy); card.append(meta,title,description,actions); list.append(card);
  }
}
renderMaterials();
