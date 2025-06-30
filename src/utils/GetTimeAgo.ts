export default function GetTimeAgo(dateString: string): string {
  const givenDate = new Date(dateString);
  const now = new Date();

  const diffMs = now.getTime() - givenDate.getTime();

  const diffMinutes = Math.floor(diffMs / 1000 / 60);
  const hours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;

  if (hours > 0 && minutes > 0) {
    return `${hours}시간 ${minutes}분 전`;
  } else if (hours > 0) {
    return `${hours}시간 전`;
  } else {
    return `${minutes}분 전`;
  }
}
