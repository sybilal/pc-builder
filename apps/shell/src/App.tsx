import { Routes, Route, Navigate } from 'react-router-dom';
import { Workspace } from './Workspace';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/build" replace />} />
            <Route path="/build" element={<Workspace />} />
        </Routes>
    );
}