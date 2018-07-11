export abstract class BaseAction<T=never> {

    protected data: T;

    async run(data?: T): Promise<any> {
        this.data = data;
        try {
            await this.execute(data)
        } catch (e) {
            await this.onFailed();
        }
    }

    abstract async execute(commandData?: T): Promise<any>;
    abstract async onFailed(commandData?: T): Promise<any>;

}