export const formDataToObject = (formData: FormData) => {
    const obj: { [key: string]: any } = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
};
