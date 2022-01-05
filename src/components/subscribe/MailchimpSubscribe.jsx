import MailchimpSubscribe from "react-mailchimp-subscribe";
import './MailchimpForm.scss'
const url =
  "https://slumlords.us20.list-manage.com/subscribe/post?u=79ed60e4b2fef22fac415bb9d&amp;id=ff19b36cc5";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe  class="MyForm" url={url} />;

// use the render prop and your custom form
const CustomForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <form
          class="MyForm"
          onSubmitted={(formData) => subscribe(formData)}
          autoComplete="on"
        />
        {status === "sending" && <div className="sending-text">sending...</div>}
        {status === "error" && (
          <div
            className="error-text"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div className="success-text">Subscribed !</div>
        )}
      </div>
    )}
  />
);

export default SimpleForm;