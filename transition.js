// ==========================================
// Page Transitions (Fade In / Fade Out)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Fade In: الصفحة تظهر بنعومة أول ما تفتح
  // (بس لو مفيش intro، لأن في صفحة index الـ intro هو اللي بيظهر الصفحة)
  if (!document.getElementById('intro')) {
    gsap.set('body', { opacity: 1 });
    gsap.from('body', { opacity: 0, duration: 0.6, ease: 'power2.out' });
  }

  // 2. Fade Out: لما تدوس على أي لينك داخلي
  const links = document.querySelectorAll('a[href]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // نتجاهل اللينكات الخارجية، واللينكات اللي بتبدأ بـ #، واللينكات اللي بتفتح في تاب جديد
      if (href.startsWith('http') || href.startsWith('#') || link.target === '_blank') {
        return;
      }
      
      // نمنع الانتقال الفوري
      e.preventDefault();
      
      // نعمل Fade Out للصفحة الحالية
      gsap.to('body', {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          // بعد ما تختفي، نروح للصفحة الجديدة
          window.location.href = href;
        }
      });
    });
  });
});