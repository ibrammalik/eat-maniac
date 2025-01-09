import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');

  wb.addEventListener('waiting', () => {
    const updateButton = document.createElement('update-button');
    updateButton.addEventListener('click', () => {
      wb.addEventListener('controlling', () => {
        window.location.reload();
      });
      wb.messageSW({ type: 'SKIP_WAITING' });
    });

    const body = document.getElementsByTagName('body')[0];
    body.appendChild(updateButton);
  });

  try {
    await wb.register();
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;
