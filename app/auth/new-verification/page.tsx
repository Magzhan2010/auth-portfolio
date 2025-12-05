import { Suspense } from 'react';
import NewVerificationClient from './new-verification-client'; // Путь к вашему клиентскому компоненту

// Это серверный компонент по умолчанию
export default function NewVerificationPageWrapper() {
  return (
    // Оборачиваем клиентский компонент в Suspense
    <Suspense fallback={<div>Loading verification...</div>}>
      <NewVerificationClient />
    </Suspense>
  );
}