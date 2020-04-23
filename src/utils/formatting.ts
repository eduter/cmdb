/**
 * Formats a movie's runtime (duration).
 *
 * @param runtime - movie duration in minutes
 */
function formatRuntime(runtime: number) {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return `${hours}h ${minutes}m`;
}

export {
  formatRuntime
};
