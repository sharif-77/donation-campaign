import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <Link to='/' className=''>Go Home</Link>

            <p>404</p>
        </div>
    );
};

export default Error;