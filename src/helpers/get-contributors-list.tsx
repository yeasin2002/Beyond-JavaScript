export async function getContributors() {
  try {
    const url =
      'https://api.github.com/repos/yeasin2002/Stack-Unboxed/contributors';
    const res = await fetch(url, {
      next: {
        revalidate: 86400 // one day
      }
    });
    if (!res.ok) throw new Error('Failed to fetch contributors');
    return res.json();
  } catch (error) {
    console.log('🚀 ~ getContributors ~ error:', error);
    return [];
  }
}
