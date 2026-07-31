import * as LucideIcons from 'lucide-react';

console.log('Testing Lucide imports...');
const checkIcons = [
  'Dumbbell', 'Users', 'Utensils', 'Globe', 'Trophy', 'Check',
  'ChevronLeft', 'ChevronRight', 'MessageCircle', 'Instagram',
  'Sparkles', 'ArrowRight', 'Flame', 'Activity', 'HeartPulse',
  'Clock', 'User', 'Star', 'UserCheck', 'CheckCircle2', 'ShieldCheck',
  'Award', 'Filter', 'Info', 'Menu', 'X', 'Youtube', 'Facebook', 'Mail', 'BookOpen'
];

let hasError = false;
checkIcons.forEach(icon => {
  if (!LucideIcons[icon]) {
    console.error(`MISSING LUCIDE ICON: ${icon}`);
    hasError = true;
  }
});

if (!hasError) {
  console.log('ALL ICONS OK!');
}
