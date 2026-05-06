import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Globe,
  TrendingUp,
  Users,
  ArrowRight,
  ChevronRight,
  Building2,
  GraduationCap,
  Droplets,
  HeartPulse,
  Briefcase,
  Award,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import hamzatPortrait from "@/assets/hamzat.jpg";
import { supabase } from "@/supabase";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log(firstName, lastName, email, city); // debug

    const { data, error } = await supabase
      .from("KOH") // ⚠️ make sure this matches your table name
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          city: city,
        },
      ]);

    setIsSubmitting(false);

    if (error) {
      console.error(error);
      alert("Error: " + error.message);
    } else {
      alert("Successfully joined 🎉");
    }
  };
  // const handleJoin = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!email) return;

  //   setIsSubmitting(true);
  //   // Simulate API call
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setEmail("");
  //     toast({
  //       title: "Welcome to the Movement!",
  //       description: "Thank you for joining. We'll be in touch soon.",
  //     });
  //   }, 1000);
  // };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/80 to-primary/40 z-10" />
          <img
            src="/images/lagos-skyline.png"
            alt="Lagos Skyline"
            className="w-full h-full object-cover object-center scale-105"
          />
        </div>

        <div className="container relative z-20 mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-8 animate-in slide-in-from-bottom-4 duration-700">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Global Diaspora Movement
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-in slide-in-from-bottom-8 duration-700 delay-150">
                Bringing Lagos <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-200">
                  Forward Together.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed animate-in slide-in-from-bottom-8 duration-700 delay-300">
                Join the global movement of proud Lagosians rallying behind Dr.
                Kadir Obafemi Hamzat for Governor. Because home is always worth
                fighting for. Eko o ni baje.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-8 duration-700 delay-500">
                <Button
                  onClick={() => scrollTo("join")}
                  size="lg"
                  className="bg-destructive hover:bg-destructive/90 text-white font-bold text-lg px-8 h-14 rounded-full"
                >
                  Join the Movement
                </Button>
                <Button
                  onClick={() => scrollTo("vision")}
                  variant="outline"
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-bold text-lg px-8 h-14 rounded-full backdrop-blur-sm"
                >
                  Read the Vision
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/30 via-white/5 to-destructive/20 rounded-[2rem] blur-2xl" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                <img
                  src={hamzatPortrait}
                  alt="Dr. Kadir Obafemi Hamzat"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary via-primary/70 to-transparent p-6 pt-20">
                  <div className="text-white">
                    <div className="text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-1">
                      Our Candidate
                    </div>
                    <div className="text-2xl font-black leading-tight">
                      Dr. Kadir Obafemi Hamzat
                    </div>
                    <div className="text-sm text-white/80 mt-1">
                      For Governor of Lagos State
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Proof Section */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x md:divide-y-0 divide-gray-200">
            <div className="text-center px-4">
              <div className="text-4xl font-black text-primary mb-2">25+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Years of Service
              </div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-black text-primary mb-2">6</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Global Chapters
              </div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-black text-primary mb-2">10k+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Diaspora Members
              </div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-black text-primary mb-2">1</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Shared Vision
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision Section */}
      <section id="vision" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
                <img
                  src="/images/aspirational-vision.png"
                  alt="Lagos Vision"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="text-white font-bold text-2xl mb-2">
                    A City That Works
                  </div>
                  <div className="w-12 h-1 bg-secondary"></div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
                The Agenda
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                A Lagos that matches our{" "}
                <span className="text-secondary">global ambitions.</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                As Lagosians abroad, we've seen how world-class cities operate.
                Dr. Kadir Obafemi Hamzat combines deep local roots with the
                technical brilliance needed to elevate Lagos onto the global
                stage. His vision is built on three pillars:
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Economic Unlocking
                    </h4>
                    <p className="text-muted-foreground">
                      Removing friction for businesses, encouraging foreign
                      direct investment, and building an ecosystem where
                      innovation thrives without borders.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Infrastructure & Transport
                    </h4>
                    <p className="text-muted-foreground">
                      Completing the intermodal transport network and ensuring
                      power reliability to match the energy of the Lagosian
                      spirit.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Globe className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Diaspora Integration
                    </h4>
                    <p className="text-muted-foreground">
                      Creating structural pathways for diaspora talent, capital,
                      and expertise to plug directly into state development
                      projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Diaspora Matters */}
      <section
        id="movement"
        className="py-24 bg-primary text-white overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img
            src="/images/diaspora-rally.png"
            alt="Rally"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">
              The Movement
            </h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Omo Eko anywhere we dey. Your voice counts.
            </h3>
            <p className="text-xl text-primary-foreground/80 mb-10 leading-8 text-justify max-w-4xl mx-auto">
              I hope sentiment or bias is not clouding your judgment about Dr.
              K.O.H. Hamzat. Let’s focus on facts, not emotions. How many
              individuals can you point to who have been consistently retained
              across four consecutive administrations? Dr. Hamzat has served
              Lagos State for over two decades under multiple governors. That
              level of continuity is not accidental—it is a strong indicator of
              competence, institutional value, and strategic relevance. In
              governance, retention at that level suggests one thing: he
              delivers results. If he lacked the intellectual capacity,
              technical expertise, or administrative effectiveness, successive
              administrations would not have kept him in critical roles for that
              long. Rather than relying on sentiment, the objective approach is
              to assess his track record, contributions, and performance. Anyone
              who overlooks these strengths should take the time to conduct
              independent, unbiased research. Fair evaluation must be grounded
              in merit, not prejudice.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-white/10 border-none text-white backdrop-blur-md">
                <CardContent className="p-6">
                  <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                    <CheckCircle2 className="text-secondary" /> Mobilize
                  </h4>
                  <p className="text-white/70 text-sm">
                    Organize your local community and rally support from abroad
                    to family back home.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-none text-white backdrop-blur-md">
                <CardContent className="p-6">
                  <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                    <CheckCircle2 className="text-secondary" /> Fund
                  </h4>
                  <p className="text-white/70 text-sm">
                    Provide the clean, transparent resources needed to run a
                    modern, data-driven campaign.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Gallery / Skyline */}
      <section className="py-0">
        <div className="flex flex-col md:flex-row h-auto md:h-[60vh]">
          <div className="w-full md:w-1/2 h-64 md:h-full relative group overflow-hidden">
            <img
              src="/images/lagos-skyline.png"
              alt="Lagos Skyline"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-full relative group overflow-hidden">
            <img
              src="/images/lagos-community.png"
              alt="Lagos Community"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>
      </section>

      {/* About / Past Projects */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              About Dr. Kadir Obafemi Hamzat
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
              A record of <span className="text-secondary">delivery</span>, not
              just promises.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Decades of public service. Engineer by training, leader by
              conviction. Below are signature projects and initiatives Dr.
              Hamzat has championed for Lagos State and her people — concrete
              work that has touched real lives across the metropolis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                tag: "Infrastructure",
                title: "Urban Renewal & Roads",
                desc: "Spearheaded major road rehabilitation and bridge upgrades that eased commuter pressure across mainland and island corridors.",
              },
              {
                icon: Droplets,
                tag: "Public Works",
                title: "Drainage & Flood Control",
                desc: "Championed strategic drainage masterplans and flood mitigation projects to safeguard communities during the rainy season.",
              },
              {
                icon: GraduationCap,
                tag: "Education",
                title: "Schools Modernisation",
                desc: "Drove the rebuilding and re-equipping of public schools across LGAs, raising learning standards for the next generation of Lagosians.",
              },
              {
                icon: HeartPulse,
                tag: "Healthcare",
                title: "Primary Healthcare Expansion",
                desc: "Backed the upgrade of primary healthcare centres and maternal care facilities, bringing dignified care closer to underserved neighbourhoods.",
              },
              {
                icon: Briefcase,
                tag: "Economy",
                title: "MSME & Youth Empowerment",
                desc: "Supported skills, grants, and micro-enterprise programmes that opened pathways into trade, tech, and the creative economy.",
              },
              {
                icon: Award,
                tag: "Governance",
                title: "Public Service Reform",
                desc: "Led reforms in transparency, digital service delivery, and inter-agency coordination to make government work for citizens.",
              },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <Card
                  key={i}
                  className="hover:-translate-y-2 transition-transform duration-300 border-gray-200 shadow-sm hover:shadow-xl group"
                >
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon />
                    </div>
                    <div className="text-xs font-bold tracking-widest uppercase text-secondary mb-2">
                      {p.tag}
                    </div>
                    <h4 className="text-xl font-bold mb-3 leading-snug">
                      {p.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {p.desc}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                      Learn more{" "}
                      <ChevronRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-2xl bg-primary text-white">
            <div className="max-w-xl">
              <h4 className="text-2xl font-black mb-2">
                A leader Lagos already knows.
              </h4>
              <p className="text-white/80">
                From the engineer's drawing board to the corridors of governance
                — service, not slogans.
              </p>
            </div>
            <Button
              onClick={() => scrollTo("join")}
              className="bg-white text-primary hover:bg-white/90 font-bold rounded-full h-12 px-6"
            >
              Stand With Him <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA / Join */}
      <section id="join" className="py-24 bg-gray-50 border-t">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Ready to build a better Lagos?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Join thousands of diaspora professionals committing their time,
            resources, and voices to the campaign.
          </p>

          <Card className="bg-white shadow-xl border-primary/10">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleJoin} className="flex flex-col gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-left space-y-2">
                    <label className="text-sm font-bold text-foreground">
                      First Name
                    </label>
                    <Input
                      required
                      placeholder="Oluwaseun"
                      className="h-12 bg-gray-50 border-gray-200"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    {/* <Input
                      required
                      placeholder="Oluwaseun"
                      className="h-12 bg-gray-50 border-gray-200"
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                    /> */}
                  </div>
                  <div className="text-left space-y-2">
                    <label className="text-sm font-bold text-foreground">
                      Last Name
                    </label>
                    <Input
                      required
                      placeholder="Adeyemi"
                      className="h-12 bg-gray-50 border-gray-200"
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                    />
                  </div>
                </div>
                <div className="text-left space-y-2">
                  <label className="text-sm font-bold text-foreground">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    required
                    placeholder="seun@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 bg-gray-50 border-gray-200"
                  />
                </div>
                <div className="text-left space-y-2">
                  <label className="text-sm font-bold text-foreground">
                    City of Residence
                  </label>
                  <Input
                    required
                    placeholder="e.g. London, Toronto"
                    className="h-12 bg-gray-50 border-gray-200"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-primary hover:bg-primary/90 text-white h-14 text-lg font-bold"
                  >
                    {isSubmitting ? "Joining..." : "Join the Movement"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 bg-destructive hover:bg-destructive/90 text-white border-transparent h-14 text-lg font-bold"
                  >
                    Donate
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  By joining, you agree to receive campaign updates. We respect
                  your privacy.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
