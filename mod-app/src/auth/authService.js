import supabase from '../lib/supabaseClient'  // ✅ default import

export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
  return data
}

export async function fetchMe() {
  const { data, error } = await supabase.auth.getUser()
  if (error) throw error
  return data
}

export async function logout() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}
