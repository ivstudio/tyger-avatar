const proxy = new Proxy<Record<string, string>>(
	{},
	{
		get: (_, key: string): string => key,
	}
);

export default proxy;
