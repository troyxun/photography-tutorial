document$.subscribe(() => {
  // 渲染所有数学公式
  const mathElements = document.querySelectorAll('.arithmatex');
  
  mathElements.forEach((element) => {
    const mathContent = element.textContent || element.innerText;
    
    try {
      // 判断是行内公式还是块级公式
    const isDisplayMode = mathContent.trim().startsWith('$$') && mathContent.trim().endsWith('$$');
    const cleanedContent = isDisplayMode ? mathContent.trim().slice(2, -2).trim() : mathContent.trim().slice(1, -1).trim();
    
    katex.render(cleanedContent, element, {
      displayMode: isDisplayMode,
      throwOnError: false,
      strict: false,
      trust: true
    });
    } catch (error) {
      console.error('KaTeX rendering error:', error);
      element.innerHTML = mathContent; // 如果渲染失败，显示原始内容
    }
  });
});
