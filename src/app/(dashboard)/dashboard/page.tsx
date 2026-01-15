import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cards = [
  {
    title: "My Tasks",
    value: "12",
    description: "Open tasks assigned to you",
  },
  {
    title: "Overdue",
    value: "3",
    description: "Tasks past due date",
  },
  {
    title: "Waiting Review",
    value: "5",
    description: "Items pending approval",
  },
  {
    title: "Latest Reports",
    value: "2",
    description: "New reports this week",
  },
];

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          A quick overview of your workload and reports.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <Card key={card.title}>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">{card.value}</div>
              <p className="mt-2 text-xs text-muted-foreground">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
