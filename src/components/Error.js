import { Notification } from "grommet"
import { useState } from "react";

const Error = ({ message }) => {
    const [visible, setVisible] = useState(true);

    return (visible && <Notification status="critical" toast title="Error!" message={message} onClose={() => setVisible(false)} />)
}

export default Error;