import { redirect } from 'next/navigation';

export default function BlogIndex() {
  // Redirect to the featured series page since we don't have a dedicated blog index
  redirect('/african-digital-development');
}
