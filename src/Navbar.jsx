import Button from "./assets/components/Buttons/Button";

function Navbar() {
  return (
    <header className="header">
      {/* Social Icons */}
      <div className="social-icons-container">
        <a
          href="https://www.instagram.com/flambow__/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
          aria-label="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="social-icon"
          >
            <path
              d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href="mailto:contact.flambow@gmail.com"
          className="social-icon-link"
          aria-label="Email"
          title="Click to copy email"
          onClick={(e) => {
            e.preventDefault();
            const email = "contact.flambow@gmail.com";
            if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard
                .writeText(email)
                .then(() => alert("Email copied to clipboard"))
                .catch(() => (window.location.href = `mailto:${email}`));
            } else {
              const el = document.createElement("textarea");
              el.value = email;
              document.body.appendChild(el);
              el.select();
              try {
                document.execCommand("copy");
                alert("Email copied to clipboard");
              } catch (err) {
                window.location.href = `mailto:${email}`;
                console.log(err);
              }
              document.body.removeChild(el);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="social-icon"
          >
            <path
              d="M20 4C20.5046 3.99984 20.9906 4.19041 21.3605 4.5335C21.7305 4.87659 21.9572 5.34684 21.995 5.85L22 6V18C22.0002 18.5046 21.8096 18.9906 21.4665 19.3605C21.1234 19.7305 20.6532 19.9572 20.15 19.995L20 20H4C3.49542 20.0002 3.00943 19.8096 2.63945 19.4665C2.26947 19.1234 2.04284 18.6532 2.005 18.15L2 18V6C1.99984 5.49542 2.19041 5.00943 2.5335 4.63945C2.87659 4.26947 3.34684 4.04284 3.85 4.005L4 4H20ZM20 7.414L13.06 14.354C12.7787 14.6349 12.3975 14.7927 12 14.7927C11.6025 14.7927 11.2213 14.6349 10.94 14.354L4 7.414V18H20V7.414ZM18.586 6H5.414L12 12.586L18.586 6Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61570529711427"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
          aria-label="Facebook"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
            className="social-icon"
          >
            <path
              d="M3.329 19.0274V11.7534H0.545C0.400457 11.7534 0.261834 11.696 0.159627 11.5938C0.0574196 11.4916 0 11.353 0 11.2084V8.33141C0 8.18687 0.0574196 8.04825 0.159627 7.94604C0.261834 7.84383 0.400457 7.78641 0.545 7.78641H3.318V5.00141C3.25166 4.34097 3.33073 3.674 3.54965 3.04737C3.76856 2.42074 4.12202 1.84963 4.58519 1.37417C5.04836 0.898707 5.61001 0.530414 6.23069 0.295161C6.85138 0.0599081 7.51604 -0.0366004 8.178 0.0124143H10.498C10.6439 0.0121283 10.7841 0.0692158 10.8883 0.171361C10.9925 0.273506 11.0524 0.412521 11.055 0.558414V2.99441C11.0519 3.14005 10.9918 3.27866 10.8877 3.38054C10.7836 3.48241 10.6437 3.53945 10.498 3.53941H9.048C7.482 3.53941 7.181 4.28141 7.181 5.37241V7.78541H10.904C10.9814 7.78285 11.0584 7.79717 11.1297 7.82739C11.2009 7.8576 11.2648 7.90298 11.3168 7.96037C11.3687 8.01776 11.4076 8.08578 11.4306 8.1597C11.4536 8.23362 11.4602 8.31167 11.45 8.38841L11.113 11.2764C11.0961 11.4087 11.0313 11.5302 10.9309 11.6179C10.8305 11.7056 10.7013 11.7535 10.568 11.7524H7.204V19.0264C7.20589 19.1549 7.18196 19.2825 7.13361 19.4016C7.08527 19.5207 7.01351 19.6289 6.92258 19.7197C6.83165 19.8105 6.7234 19.8822 6.60426 19.9304C6.48512 19.9786 6.35751 20.0024 6.229 20.0004H4.292C4.16449 20.0008 4.03818 19.9758 3.92044 19.9269C3.80269 19.878 3.69588 19.8061 3.60623 19.7154C3.51658 19.6247 3.4459 19.5171 3.3983 19.3988C3.3507 19.2805 3.32714 19.1549 3.329 19.0274Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

      {/* Prototype Button */}
      <Button
        label="Découvrir le prototype"
        redirectTo="https://www.figma.com/proto/6ARmwCBgskBJmsZXScj0MS/Flambow?node-id=131-215&t=oMkockTeGWfooJgP-9&scaling=scale-down&content-scaling=fixed&page-id=1%3A5&starting-point-node-id=131%3A215&show-proto-sidebar=1"
      />
    </header>
  );
}

export default Navbar;
