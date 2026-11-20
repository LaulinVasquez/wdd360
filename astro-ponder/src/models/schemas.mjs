const userSchema = {
    type: "object",
    properties: {
        name: {
            type: "string"
        },
        email: {
            type: "string"
        },
        required: ["name", "email"]
    }
};

const alertSchema = {
    type: "object",
    properties: {
        title: {
            type: "string"
        },
        message: {
            type: "string"
        },
        userId: {
            type: "required"
        },
        required: ["titles", "message", "userId"]
    }
};