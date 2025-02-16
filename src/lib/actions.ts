"use server";

import { FormDataRequest } from "@/types/form";

export async function sendSlackMessage(formData: FormDataRequest) {
    const webhookURL = process.env.SLACK_WEBHOOK_URL;

    if (!webhookURL) {
        return { error: "WEBHOOK_URL is not defined." };
    }

    const payload = {
        blocks: [
            { type: "section", text: { type: "mrkdwn", text: "*New Form Submission 📩*" } },
            { type: "divider" },
            { type: "section", text: { type: "mrkdwn", text: `*Name:* ${formData.name}` } },
            { type: "section", text: { type: "mrkdwn", text: `*Contact:* ${formData.contact}` } },
            { type: "section", text: { type: "mrkdwn", text: `*Selected Option:* ${formData.selected}` } },
            { type: "section", text: { type: "mrkdwn", text: `*Dimensions:* ${formData.length} x ${formData.width}` } },
            { type: "section", text: { type: "mrkdwn", text: `*Chickens:* ${formData.chickens}` } },
            { type: "section", text: { type: "mrkdwn", text: `*Salary:* ${formData.salary}` } },
            { type: "section", text: { type: "mrkdwn", text: `*Shed Type:* ${formData.shedType}` } },
            { type: "section", text: { type: "mrkdwn", text: `*Cage Type:* ${formData.cageType}` } },
        ],
    };

    try {
        const response = await fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Slack API error: ${response.status}`);
        }

        return { success: true, message: "Message sent successfully!" };
    } catch (error) {
        console.error("Slack API Error:", error);
        return { error: "Failed to send message." };
    }
}
