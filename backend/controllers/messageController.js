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

        case "diksha":
            message = "You are beautiful. I really like your talkative nature. Keep smiling and don't take stress.";
            break;

        case "neha":
            message = "Wish you a very happy birthday! God bless you. I may not know exactly what to say, but I genuinely want to meet you and say sorry for everything once again. I wont come after this as I know you don't want me to disturb you. please take care of yourself. I miss you deeply every single day, and your presence still means a lot to me. Again, I truly wish you a very happy birthday. If we ever met again then will definitely celebrate your birthday.";
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