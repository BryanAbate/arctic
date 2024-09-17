import { parseJWT } from "@oslojs/jwt";

export function decodeIdToken<T extends object>(idToken: string): T {
	try {
		const [_header, payload, _signature] = parseJWT(idToken);
		return payload as T;
	} catch (e) {
		throw new Error("Invalid ID token", {
			cause: e
		});
	}
}
