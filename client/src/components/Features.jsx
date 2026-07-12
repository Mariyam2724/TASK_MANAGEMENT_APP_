function Features() {
  const features = [
    {
      icon: "📝",
      title: "Add Tasks",
      text: "Create and organize your daily tasks effortlessly.",
    },
    {
      icon: "✏️",
      title: "Edit Tasks",
      text: "Update your task information anytime.",
    },
    {
      icon: "🗑️",
      title: "Delete Tasks",
      text: "Remove unwanted tasks with one click.",
    },
    {
      icon: "🔍",
      title: "Search",
      text: "Instantly find tasks by title.",
    },
    {
      icon: "🎯",
      title: "Filter",
      text: "Filter tasks by their current status.",
    },
    {
      icon: "📊",
      title: "Dashboard",
      text: "Track Pending, In Progress and Completed tasks.",
    },
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Features</h2>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;