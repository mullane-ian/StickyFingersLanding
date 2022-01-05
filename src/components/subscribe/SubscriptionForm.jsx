const SubscribeForm = () => {
    return (
      <div className="subscribe-form">
        <form>
          <label>
            <input
              className="notifyInput"
              type="text"
              name="name"
              placeholder="Email Address"
            />
          </label>
          <input className="notifyBtn" type="submit" value="NOTIFY ME" />
        </form>
      </div>
    );
  };
  export default SubscribeForm;