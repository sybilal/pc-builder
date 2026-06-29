import { useBuildStore } from '@pcb/core';
import type { PCComponent } from '@pcb/core';
import { Button } from '@pcb/ui';
import componentsData from './data/components.json';

// JSON widens category to `string` and gives each row a distinct specs shape,
// so route through `unknown` to land on the PCComponent contract.
const components = componentsData as unknown as PCComponent[];

const eur = (value: number) =>
    new Intl.NumberFormat('en-IE', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
    }).format(value);

export default function App() {
    const build = useBuildStore((s) => s.build);
    const addComponent = useBuildStore((s) => s.addComponent);
    const removeComponent = useBuildStore((s) => s.removeComponent);
    const spent = useBuildStore((s) => s.spent());

    return (
        <div className="p-4">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-medium text-[var(--text)]">Components</h2>
                <span className="text-sm text-[var(--text-muted)]">
                    Spent: <span className="text-[var(--text)]">{eur(spent)}</span>
                </span>
            </div>
            <div className="grid gap-3">
                {components.map((c) => {
                    const inBuild = build[c.category]?.id === c.id;
                    return (
                        <div
                            key={c.id}
                            className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3"
                        >
                            <div>
                                <p className="text-[var(--text)]">{c.name}</p>
                                <p className="text-sm text-[var(--text-muted)]">
                                    {c.brand} · {c.category.toUpperCase()} · {eur(c.priceEur)}
                                </p>
                            </div>
                            <Button
                                size="sm"
                                variant={inBuild ? 'danger' : 'primary'}
                                onClick={() =>
                                    inBuild ? removeComponent(c.category) : addComponent(c)
                                }
                            >
                                {inBuild ? 'Remove' : 'Add'}
                            </Button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}