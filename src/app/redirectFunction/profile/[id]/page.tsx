import { redirect } from 'next/navigation';

interface UserProfile {
  name: string;
  age: number;
}

async function fetchUserProfile(id: string): Promise<UserProfile | null> {
  const Data: Record<string, UserProfile> = {
    '1': { name: 'John Doe', age: 30 },
    '2': { name: 'Jane Smith', age: 25 },
  };

  return Data[id] || null;
}

interface ProfilePageProps {
  params: {
    id: string;
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { id } = params;

  const user = await fetchUserProfile(id);

  if (!user) {
    redirect('/redirectFunction/register');
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}
