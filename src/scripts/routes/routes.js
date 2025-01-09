const getPage = async (selectedPageStr) => {
  const { default: pageObject } = await import(`../views/pages/${selectedPageStr}/${selectedPageStr}`);
  return pageObject;
};

const routes = {
  '/': () => getPage('Home'), // default page
  '/home': () => getPage('Home'),
  '/detail/:id': () => getPage('Detail'),
  '/favorite': () => getPage('Favorite'),
};

export default routes;
