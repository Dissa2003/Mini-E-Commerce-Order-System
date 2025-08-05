export async function registerUser({ 
  fullName, 
  email, 
  password, 
  phoneNumber, 
  streetAddress, 
  city, 
  state, 
  country, 
  postalCode 
}) {
  const res = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      fullName, 
      email, 
      password, 
      phoneNumber, 
      streetAddress, 
      city, 
      state, 
      country, 
      postalCode 
    })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Registration failed');
  return data;
}

export async function loginUser({ email, password }) {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Login failed');
  return data;
}