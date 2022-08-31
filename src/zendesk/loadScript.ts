export const loadScriptAsync = (src: string) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.id = 'ze-snippet';
  script.src = src;
  return new Promise((resolve, reject) => {
    const first = document.getElementsByTagName('script')[0];
    if (first.parentNode) {
      first.parentNode.insertBefore(script, first);
    }
    script.addEventListener('load', () => {
      resolve(script);
    });
    script.addEventListener('error', (error) => reject(error));
  });
};

interface LoadScriptProps {
  script: string,
  onSuccess?: () => void,
  onError?: (error: Error) => void,
  onFinish?: () => void,
}
export const loadScript = async ({
  script,
  onSuccess,
  onError,
  onFinish,
}: LoadScriptProps) => {
  try {
    await loadScriptAsync(script);
    if (onSuccess) { onSuccess(); }
  } catch (e) {
    if (onError) { onError(e as Error); }
  }
  if (onFinish) { onFinish(); }
};
