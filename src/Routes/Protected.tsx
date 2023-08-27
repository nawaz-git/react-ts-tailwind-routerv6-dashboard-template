import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './IsAuthenticated';

interface ProtectedProps {
    children: React.ReactNode;
}

function Protected({ children }: ProtectedProps) {

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default Protected;