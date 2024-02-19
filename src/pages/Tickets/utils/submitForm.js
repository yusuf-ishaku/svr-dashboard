export const eventFormSubmit = (tagPointRef, formRef) => {
    let forms = Array.from(tagPointRef.current.children);
    forms.forEach((child) => {
      child.lastChild.click();
    });
    formRef.current.lastChild.click()
  };
