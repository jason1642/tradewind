const BreadCrumbs = () => {
  return (
    <div className="flex max-w-310 my-0 mx-auto px-6 pt-5.75 pb-2.5 gap-3 text-[10px]">
      <a className="no-underline text-inherit" href="#top">
        Home
      </a>
      <span>/</span>
      <a className="no-underline text-inherit" href="#top">
        Headphones
      </a>
      <span>/</span>
      <span>Studio One</span>
    </div>
  );
};

export default BreadCrumbs;
