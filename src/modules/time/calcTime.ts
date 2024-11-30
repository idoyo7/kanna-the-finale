// 하드코딩된 목표 날짜 (2024-12-02 19:00:00 KST)
export const TARGET_DATE = new Date("2024-12-02T19:00:00+09:00");
export const DOWNLOAD_DEADLINE = new Date("2024-12-02T23:59:59+09:00");

export const concertPlaying = () => {
  const now = new Date();
  const timeDiff = now.getTime() - TARGET_DATE.getTime();

  return timeDiff > 1;
};

export const canDownload = () => {
  const now = new Date();
  const timeDiff = DOWNLOAD_DEADLINE.getTime() - now.getTime();

  return timeDiff > 1;
};
