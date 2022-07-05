module.exports = (client) => {

  const activities = [
      `⚙️ Manager d'OctoBot`
    ];
      let i = 0;
    setInterval(() => {
        client.user.setActivity(activities[i], { type: "WATCHING" });
        i = ++i % activities.length;
        }, 5000);
  console.log(`✅ Client en ligne | 👑 Manager d'OctoBot`);

}
