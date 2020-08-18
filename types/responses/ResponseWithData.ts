type ResponseWithData<T> = {
    data: T;
    success: boolean;
    errors: Array<Number>;
};
