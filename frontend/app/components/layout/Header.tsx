import Button from "../ui/Button";
const Header = () => {
  return (
    <header className="flex items-center justify-between h-18">
      {/* Replace with reactdom nav link */}
      <a
        className="text-3xl tracking-normal no-underline text-ink font-[Georgia] px-5"
        href="#top"
      >
        tradewind
        <span className="text-[9px] align-top ml-0.75">®</span>
      </a>
      <div className="flex gap-8.5 ml-17.5 ">
        <a href="#details">Audio</a>
        <a href="#details">Our approach</a>
        <a href="#details">Support</a>
      </div>

      <Button
        className={"border-0 text-sm w-auto! bg-transparent! text-ink"}
        type="button"
        // onClick={() => {
        //   console.log("cart icon clicked");
        // }} Use nav link instead to go to cart page unless a dropdown of cart is wanted
        aria-label="Shopping bag"
      >
        Bag
        <span className="inline-grid place-items-center w-5.25 h-5.25 border rounded-[50%]  ml-2 text-[10px] text-ink ">
          3
        </span>
      </Button>
    </header>
  );
};

export default Header;
