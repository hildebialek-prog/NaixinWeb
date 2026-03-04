import { useState } from "react";
import {
  ShieldCheck,
  FileText,
  FileSignature,
  ScrollText,
  Stamp,
  Shield,
  Clock4,
  ArrowRight,
  CheckCircle,
  Lock,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const Compliance = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    purpose: "",
    ndaAccepted: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.ndaAccepted) {
      toast.error("Please accept the NDA terms to continue");
      return;
    }

    // Generate reference ID
    const refId = `VRF-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)
      .toUpperCase()}`;
    setReferenceId(refId);
    setSubmitted(true);

    toast.success("Verification request submitted successfully");
  };

  const documents = [
    {
      title: "Business Registration Certificate (Current)",
      description: "Valid BR Certificate No. 77636628-000-01-25-7",
      format: "PDF",
      icon: FileText,
    },
    {
      title: "Proof of Registered Office Address",
      description: "Official address verification document",
      format: "PDF",
      icon: FileSignature,
    },
    {
      title: "Bank Reference Letter",
      description: "Supporting financial documentation",
      format: "PDF",
      icon: ScrollText,
    },
    {
      title: "Sample Commercial Documents",
      description: "Invoice and packing list templates",
      format: "PDF",
      icon: Stamp,
    },
    {
      title: "Privacy & AML Compliance Statement",
      description: "Anti-money laundering and privacy policies",
      format: "PDF",
      icon: Shield,
    },
  ];

  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-10 top-0 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute -left-10 top-40 h-96 w-96 rounded-full bg-primary/5 blur-[150px]" />
      </div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.5),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute inset-0 mix-blend-screen opacity-30 bg-[linear-gradient(120deg,rgba(255,255,255,0.05)_0%,transparent_45%)] animate-compliance-pan" />
        <div className="section-container relative z-10 py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="space-y-8 rounded-[36px] border border-white/20 bg-white/95 p-8 shadow-[0_35px_110px_rgba(3,7,18,0.45)] text-foreground">
              <div className="inline-flex items-center gap-3 rounded-full border border-border bg-background/70 px-4 py-1 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-accent" />
                Verification Desk
              </div>
              <div className="space-y-4">
                <h1 className="font-serif text-4xl lg:text-5xl">
                  Compliance & Verification
                </h1>
                <p className="text-muted-foreground text-lg">
                  Official documentation for banks, partners, and regulators,
                  secured with NDA-first workflows and reference IDs for every
                  release.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { label: "Founded", value: "2025" },
                  { label: "Markets engaged", value: "24" },
                  { label: "Requests fulfilled", value: "320+" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-border bg-muted/40 p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2" asChild>
                  <a href="#verification">
                    <ArrowRight className="h-4 w-4" />
                    Submit verification
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Download summary
                </Button>
              </div>
            </div>
            <div className="rounded-[36px] border border-border bg-background/90 p-8 backdrop-blur-2xl text-foreground space-y-4 shadow-[0_35px_110px_rgba(0,0,0,0.45)]">
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Registry snapshot
              </p>
              <h3 className="text-3xl font-serif text-foreground">
                GUANGZHOU NAIXIN IMPORT AND EXPORT CO LIMITED
              </h3>
              <p className="text-muted-foreground">
                Registered with Companies Registry, HKSAR. Body Corporate (CORP)
                status, valid 22 Jan 2025 – 21 Jan 2026.
              </p>
              <div className="rounded-2xl border border-border bg-background/70 p-5 space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  Registration number
                </p>
                <p className="text-2xl font-semibold text-foreground">
                  77636628-000-01-25-7
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background/70 p-5 space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  Registered address
                </p>
                <p className="text-foreground">
                  8/F., China Hong Kong Tower, 8–12 Hennessy Road, Wan Chai,
                  Hong Kong
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-20 space-y-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Status / Legal form", value: "Body Corporate (CORP)" },
            { label: "Issuing authority", value: "Companies Registry, HKSAR" },
            { label: "Verification hotline", value: "+852 5552 8890" },
            { label: "Compliance email", value: "compliance@naixin.global" },
            { label: "KYC portal", value: "Available upon NDA" },
            { label: "Audit partners", value: "SGS • Deloitte" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-border bg-card/80 p-6 hover:border-accent/50 transition"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-3 text-xl font-semibold text-foreground">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-[36px] border border-border bg-card/80 p-10 space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Process
              </p>
              <h2 className="font-serif text-3xl">Digital trust workflow.</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Every verification follows a three-step release protocol with NDA
              acknowledgement, identity checks, and secure document delivery.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Mail,
                title: "Request",
                copy: "Submit purpose, contact details, and NDA acceptance.",
              },
              {
                icon: ShieldCheck,
                title: "Validate",
                copy: "Compliance team reviews within 24 hours and confirms scope.",
              },
              {
                icon: Lock,
                title: "Release",
                copy: "Documents shared via encrypted portal with reference ID.",
              },
            ].map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-border bg-background/70 p-6 space-y-3 shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <step.icon className="h-5 w-5" />
                </div>
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  Step {index + 1}
                </p>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container pb-24 space-y-12">
        <div className="space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Repository
              </p>
              <h2 className="font-serif text-3xl">Available documents.</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Each file is watermarked and accessible after verification
              approval. Select what you need in your request notes.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {documents.map((doc, index) => (
              <div
                key={doc.title}
                className="group relative overflow-hidden rounded-[28px] border border-border bg-card/80 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.18)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <doc.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground border border-border px-2 py-1 rounded-full">
                    {doc.format}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{doc.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {doc.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                  <Clock4 className="h-3.5 w-3.5" />
                  Request access
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          id="verification"
          className="rounded-[36px] border border-border bg-card/80 p-10 space-y-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  Secure release
                </p>
                <h2 className="font-serif text-3xl">
                  Request verification pack.
                </h2>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  "NDA acknowledgement required",
                  "Documents shared within 1–2 business days",
                  "Encrypted delivery + reference ID",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-border px-4 py-3"
                  >
                    <ShieldCheck className="h-4 w-4 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  compliance@naixin.global
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +852 5552 8890
                </div>
              </div>
            </div>
            <div className="rounded-[28px] border border-border bg-background/70 p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company / Institution *</Label>
                      <Input
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="purpose">Purpose of Verification *</Label>
                    <Input
                      id="purpose"
                      required
                      placeholder="e.g., Bank KYC verification, Partnership evaluation"
                      value={formData.purpose}
                      onChange={(e) =>
                        setFormData({ ...formData, purpose: e.target.value })
                      }
                      className="mt-2"
                    />
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-border p-4">
                    <Checkbox
                      id="nda"
                      checked={formData.ndaAccepted}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          ndaAccepted: checked as boolean,
                        })
                      }
                    />
                    <Label
                      htmlFor="nda"
                      className="text-sm leading-relaxed cursor-pointer"
                    >
                      I accept the Non-Disclosure Agreement and confirm the
                      requested documents will be used solely for legitimate
                      verification purposes.
                    </Label>
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Submit verification request
                  </Button>
                </form>
              ) : (
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mx-auto">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-2xl">Request submitted</h3>
                  <p className="text-muted-foreground">
                    Your verification request has been received. Our compliance
                    team will process your request within 1–2 business days.
                  </p>
                  <div className="rounded-2xl border border-border bg-background p-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      Reference ID
                    </p>
                    <p className="font-mono text-lg font-semibold">
                      {referenceId}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Save this ID for tracking. An email will be sent to{" "}
                    <strong>{formData.email}</strong> with next steps.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes compliance-pan {
          0% { transform: translateX(-6%); }
          50% { transform: translateX(4%); }
          100% { transform: translateX(-6%); }
        }
        .animate-compliance-pan {
          animation: compliance-pan 18s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Compliance;
