module.exports = {
    apps: [
      {
        name: "node-app",
        script: "./server.js",
        watch: true,
      },
      {
        name: "streamlit-app",
        script: "streamlit",
        args: "run python_app/main.py",
        interpreter: "none",
        env: {
          PORT: 8501
        }
      }
    ]
  };