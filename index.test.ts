import { ZoomMeeting } from "./index";

describe("zoom-meeting-typescript-sdk", () => {
    it("initialize client", async () => {
        const zoommeeting = new ZoomMeeting({
            apiKey: "API_KEY",
        });
    });
});
