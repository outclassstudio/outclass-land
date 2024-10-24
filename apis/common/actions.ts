"use server";

export async function getUploadUrl() {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${process.env.IMAGE_ACCOUNT}/images/v2/direct_upload`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.IMAGE_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  return data;
}
