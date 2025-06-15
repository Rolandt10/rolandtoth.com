export function timeAgo(timestamp: number): string {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - timestamp) / 1000);

  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);

  if (minutes < 60) {
    return minutes <= 1 ? "a minute ago" : `${minutes} minutes ago`;
  }

  if (hours < 24) {
    return hours === 1 ? "an hour ago" : `${hours} hours ago`;
  }

  if (days < 30) {
    return days === 1 ? "a day ago" : `${days} days ago`;
  }

  if (months < 12) {
    return months === 1 ? "a month ago" : `${months} months ago`;
  }
}
