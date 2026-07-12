const getMessage = (req, res) => {

    const keyword = req.query.keyword?.toLowerCase();

    let message = "";

    switch (keyword) {

        case "docker":
            message = "🐳 Docker packages applications into containers.";
            break;

        case "azure":
            message = "☁️ Azure is Microsoft's cloud platform.";
            break;

        case "github":
            message = "🚀 GitHub Actions automates CI/CD.";
            break;

        default:
            message = "❌ Invalid Keyword";
    }

    res.json({
        keyword,
        message
    });

};

module.exports = { getMessage };